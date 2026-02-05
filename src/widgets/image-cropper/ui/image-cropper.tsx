"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import styles from "./image-cropper.module.css";
import clsx from "clsx";
import NumberInput from "./number-input";

export default function App() {
  const [imageSrc, setImageSrc] = useState(null);
  const [imgMeta, setImgMeta] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);
  const previewCanvasRef = useRef(null);

  // Controls
  const [mode, setMode] = useState("ratio"); // 'ratio' or 'exact'
  const [ratioW, setRatioW] = useState(1);
  const [ratioH, setRatioH] = useState(1);
  const [exactW, setExactW] = useState(2000);
  const [exactH, setExactH] = useState(2000);
  const [hAlign, setHAlign] = useState("center"); // left, center, right
  const [vAlign, setVAlign] = useState("center"); // top, center, bottom
  const [hAlignVal, setHAlignVal] = useState(0);
  const [vAlignVal, setVAlignVal] = useState(0);

  const [qual, setQual] = useState(83);
  const [ext, setExt] = useState("webp");

  // Load image from File/Blob/DataURL
  function loadImageFromFile(file: Blob) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const src = e.target.result as string;
      const img = new Image();
      img.onload = () => {
        setImageSrc(src);
        setImgMeta({ width: img.naturalWidth, height: img.naturalHeight });
        setExactW(img.naturalWidth);
        setExactH(img.naturalHeight);
        setVAlignVal(0);
        setHAlignVal(0);
        imgRef.current = img;
      };
      img.src = src;
    };
    reader.readAsDataURL(file);
  }

  // File input handler
  function handleFileChange(e) {
    const file = e.target.files && e.target.files[0];
    if (file) loadImageFromFile(file);
    e.target.value = null;
  }

  // Paste from clipboard
  useEffect(() => {
    function onPaste(e) {
      const items = (e.clipboardData || e.originalEvent.clipboardData).items;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.kind === "file") {
          const blob = item.getAsFile();
          loadImageFromFile(blob);
          e.preventDefault();
          return;
        }
      }
    }
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, []);

  // Compute crop rectangle on original image coordinates
  const computeCropRect = useCallback(() => {
    if (!imgRef.current) return null;
    const W = imgMeta.width;
    const H = imgMeta.height;
    const targetRatio =
      mode === "ratio"
        ? ratioW / Math.max(1, ratioH)
        : exactW / Math.max(1, exactH);

    let cropW: number, cropH: number;
    if (W / H > targetRatio) {
      // source is wider -> crop width
      cropH = H;
      cropW = Math.round(H * targetRatio);
    } else {
      cropW = W;
      cropH = Math.round(W / targetRatio || W);
    }

    let x: number;
    if (hAlign === "left") x = 0;
    else if (hAlign === "center") x = Math.round((W - cropW) / 2);
    else x = W - cropW;
    x += hAlignVal;

    let y: number;
    if (vAlign === "top") y = 0;
    else if (vAlign === "center") y = Math.round((H - cropH) / 2);
    else if (vAlign === "custom") x = vAlignVal;
    else y = H - cropH;
    y += vAlignVal;

    return { x, y, w: cropW, h: cropH };
  }, [
    imgRef,
    imgMeta,
    exactH,
    exactW,
    mode,
    ratioW,
    ratioH,
    hAlign,
    vAlign,
    hAlignVal,
    vAlignVal,
    ext,
    qual,
  ]);

  // Draw preview (scaled) to canvas
  useEffect(() => {
    const canvas = previewCanvasRef.current;
    const img = imgRef.current;
    if (!canvas || !img) return;
    const ctx = canvas.getContext("2d");

    const crop = computeCropRect();
    if (!crop) return;

    // Calculate preview size to fit in container responsively
    const maxW = 900; // limits for preview; CSS also constrains on small screens
    const maxH = 600;
    const scale = Math.min(maxW / crop.w, maxH / crop.h, 1);
    const outW = Math.max(200, Math.round(crop.w * scale));
    const outH = Math.max(120, Math.round(crop.h * scale));

    canvas.width = outW;
    canvas.height = outH;

    // Clear and draw
    ctx.clearRect(0, 0, outW, outH);
    ctx.drawImage(img, crop.x, crop.y, crop.w, crop.h, 0, 0, outW, outH);
  }, [
    imageSrc,
    ratioW,
    ratioH,
    exactW,
    exactH,
    hAlign,
    vAlign,
    mode,
    imgMeta,
    computeCropRect,
    ext,
    qual,
  ]);

  // Open result in new tab at maximal quality
  function openResultInNewTab() {
    if (!imgRef.current) return;
    const img = imgRef.current;
    const crop = computeCropRect();
    if (!crop) return;

    let outW: number, outH: number;
    if (mode === "ratio") {
      // In ratio mode we return the crop at original pixel size (max quality)
      outW = crop.w;
      outH = crop.h;
    } else {
      // exact mode -> use exactW/exactH
      outW = Math.max(1, Math.floor(Number(exactW)));
      outH = Math.max(1, Math.floor(Number(exactH)));
    }

    const off = document.createElement("canvas");
    off.width = outW;
    off.height = outH;
    const ctx = off.getContext("2d");

    // draw from original image's natural pixels
    ctx.drawImage(img, crop.x, crop.y, crop.w, crop.h, 0, 0, outW, outH);

    // open in new tab
    off.toBlob(
      (blob) => {
        if (!blob) return;
        const url = URL.createObjectURL(blob);
        window.open(url, "_blank");
        // we do not revoke immediately to allow user to download; revoke when tab closed is browser-managed
      },
      "image/" + ext,
      qual / 100,
    );
  }

  // Small helpers
  function setRatioFromPreset(preset: string) {
    const ratio = preset.split(":");

    if (ratio.length === 2) {
      const [ratioW, ratioH] = ratio;
      setRatioW(Number(ratioW));
      setRatioH(Number(ratioH));
    } else {
      setRatioW(imgMeta.width);
      setRatioH(imgMeta.height);
    }
  }

  return (
    <div className={styles.root}>
      <main className={styles.main}>
        <section className={styles.controls}>
          <div className={styles.inputRow}>
            <label className={styles.button}>
              Загрузить
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className={styles.hiddenInput}
              />
            </label>
            <a
              className={styles.button}
              onClick={() => {
                setImageSrc(null);
                imgRef.current = null;
                setImgMeta({ width: 0, height: 0 });
              }}
            >
              Очистить
            </a>
            <a
              className={clsx(styles.button, styles.secondary)}
              onClick={() => {
                navigator.clipboard &&
                  alert(
                    "Вставьте изображение из буфера: Ctrl+V / ⌘+V (или просто вставьте) — поддержка зависит от браузера",
                  );
              }}
            >
              Вставить из буфера
            </a>
          </div>
          <div className={styles.meta}>
            <strong>Исходное изображение:</strong> {imgMeta.width} ×{" "}
            {imgMeta.height} px
          </div>
          <div className={styles.box}>
            <div className={styles.modeRow}>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="mode"
                  checked={mode === "ratio"}
                  onChange={() => setMode("ratio")}
                />{" "}
                Пропорции
              </label>
              <label className={styles.radio}>
                <input
                  type="radio"
                  name="mode"
                  checked={mode === "exact"}
                  onChange={() => setMode("exact")}
                />{" "}
                Точные размеры
              </label>
            </div>
            {mode === "ratio" ? (
              <>
                <div className={styles.row}>
                  <div>
                    <label>Ширина:</label>
                    <NumberInput
                      min={0}
                      max={imgMeta.width}
                      value={ratioW}
                      onChange={setRatioW}
                      className={styles.smallInput}
                    />
                  </div>
                  <div>
                    <label>Высота:</label>
                    <NumberInput
                      min={0}
                      max={imgMeta.height}
                      value={ratioH}
                      onChange={setRatioH}
                      className={styles.smallInput}
                    />
                  </div>
                  <div>
                    <label>Пресет:</label>
                    <select
                      onChange={(e) => setRatioFromPreset(e.target.value)}
                      className={styles.select}
                      defaultValue="1:1"
                    >
                      <option value="">—</option>
                      <option value="1:1">1:1</option>
                      <option value="21:9">16:9</option>
                      <option value="16:9">16:9</option>
                      <option value="16:10">16:10</option>
                      <option value="10:16">10:16</option>
                      <option value="9:16">9:16</option>
                      <option value="4:3">4:3</option>
                      <option value="3:4">3:4</option>
                    </select>
                  </div>
                </div>
                <div className={styles.hint}>
                  В режиме &quot;Пропорции&quot; результат при экспорте будет
                  сохранён в том разрешении, в котором найден кроп на исходном
                  изображении — это даёт максимальное качество.
                </div>
              </>
            ) : (
              <>
                <div className={styles.row}>
                  <div>
                    <label>Ширина (px):</label>
                    <NumberInput
                      min={1}
                      value={exactW}
                      onChange={setExactW}
                      className={styles.smallInput}
                    />
                  </div>
                  <div>
                    <label>Высота (px):</label>
                    <NumberInput
                      min={1}
                      className={styles.smallInput}
                      value={exactH}
                      onChange={setExactH}
                    />
                  </div>
                </div>
                <div className={styles.hint}>
                  В режиме &quot;Точные размеры&quot; изображение будет
                  экспортировано в заданных пикселях (может происходить
                  масштабирование).
                </div>
              </>
            )}
          </div>
          <div className={styles.box}>
            <div className={styles.row}>
              <div>
                <label>Гор. выравнивание</label>
                <select
                  value={hAlign}
                  onChange={(e) => setHAlign(e.target.value)}
                  className={styles.select}
                >
                  <option value="left">Слева</option>
                  <option value="center">Центр</option>
                  <option value="right">Справа</option>
                </select>
              </div>
              <div>
                <label>Верт. выравнивание</label>
                <select
                  value={vAlign}
                  onChange={(e) => setVAlign(e.target.value)}
                  className={styles.select}
                >
                  <option value="top">Вверху</option>
                  <option value="center">Центр</option>
                  <option value="bottom">Внизу</option>
                </select>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <label>Гор. смещение</label>
                <NumberInput
                  value={hAlignVal}
                  onChange={setHAlignVal}
                  className={styles.smallInput}
                />
              </div>
              <div>
                <label>Верт. смещение</label>
                <NumberInput
                  value={vAlignVal}
                  onChange={setVAlignVal}
                  className={styles.smallInput}
                />
              </div>
            </div>
          </div>
          <div className={styles.saveBox}>
            <button
              className={styles.primary}
              onClick={openResultInNewTab}
              disabled={!imageSrc}
            >
              Открыть в новой вкладке (макс. качество)
            </button>

            <div className={styles.row}>
              <div>
                <label>Раширение:</label>
                <select
                  value={ext}
                  onChange={(e) => setExt(e.target.value)}
                  className={styles.select}
                  defaultValue="webp"
                >
                  <option value="jpeg">jpeg</option>
                  <option value="png">png</option>
                  <option value="webp">webp</option>
                  {/*<option value="avif">avif</option>*/}
                </select>
              </div>
              <div>
                <label>Качество:</label>
                <NumberInput
                  min={1}
                  max={100}
                  className={styles.smallInput}
                  value={qual}
                  onChange={setQual}
                />
              </div>
            </div>
          </div>
        </section>

        <section className={styles.preview}>
          <div className={styles.previewInner}>
            {imageSrc ? (
              <canvas ref={previewCanvasRef} className={styles.canvas} />
            ) : (
              <div className={styles.empty}>
                Загрузите или вставьте изображение (Ctrl+V / ⌘+V)
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <small>
          Поддержка paste зависит от браузера. Откройте результат в новой
          вкладке и сохраните или скопируйте (ПК: правый клик →{" "}
          <b>сохранить картинку как</b> или <b>копировать</b>).
        </small>
      </footer>
    </div>
  );
}
