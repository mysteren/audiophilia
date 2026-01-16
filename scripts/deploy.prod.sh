#!/bin/bash

# ============================================
# ЦВЕТА И СТИЛИ
# ============================================

RESET='\033[0m'
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
CYAN='\033[0;36m'
BOLD='\033[1m'

# ============================================
# ПРОСТЫЕ ФУНКЦИИ ВЫВОДА
# ============================================

log() {
    echo -e "[$(date '+%H:%M:%S')] $1"
}

success() {
    echo -e "${GREEN}✓ $1${RESET}"
}

error() {
    echo -e "${RED}✗ $1${RESET}"
}

info() {
    echo -e "${CYAN}→ $1${RESET}"
}

title() {
    echo -e "\n${BLUE}${BOLD}=== $1 ===${RESET}"
}


# ============================================
# ФУНКЦИИ ДЛЯ ИЗМЕРЕНИЯ ВРЕМЕНИ
# ============================================

start_timer() {
    SCRIPT_START_TIME=$(date +%s)
    SCRIPT_START_TIME_MS=$(date +%s%3N)
}

get_elapsed_time() {
    local current_time=$(date +%s)
    local elapsed=$((current_time - SCRIPT_START_TIME))

    local hours=$((elapsed / 3600))
    local minutes=$(((elapsed % 3600) / 60))
    local seconds=$((elapsed % 60))

    if [ $hours -gt 0 ]; then
        printf "%02d:%02d:%02d" $hours $minutes $seconds
    elif [ $minutes -gt 0 ]; then
        printf "%02d:%02d" $minutes $seconds
    else
        printf "%d сек" $seconds
    fi
}

get_elapsed_time_ms() {
    local current_time_ms=$(date +%s%3N)
    local elapsed_ms=$((current_time_ms - SCRIPT_START_TIME_MS))

    local seconds=$((elapsed_ms / 1000))
    local ms=$((elapsed_ms % 1000))

    if [ $seconds -gt 0 ]; then
        printf "%d.%03d сек" $seconds $ms
    else
        printf "%d мс" $ms
    fi
}

# Начинаем отсчет времени выполнения скрипта
start_timer

# ============================================
# ЗАГРУЗКА КОНФИГУРАЦИИ
# ============================================

title "Деплой проекта"

CONFIG_FILE="./scripts/deploy.local.config"

info "Загрузка конфигурации..."

if [ -f "$CONFIG_FILE" ]; then
    source "$CONFIG_FILE"
    success "Конфигурация загружена"
else
    error "Файл конфигурации не найден: $CONFIG_FILE"
    exit 1
fi

# Проверяем обязательные параметры
if [ -z "$SERVER_USER" ] || [ -z "$SERVER_IP" ] || [ -z "$SERVER_PROJECT_PATH" ]; then
    error "В конфигурации не указаны обязательные параметры"
    exit 1
fi

# ============================================
# ИНФОРМАЦИЯ О ДЕПЛОЕ
# ============================================

info "Настройки деплоя:"
echo "  Пользователь: $SERVER_USER"
echo "  Сервер: $SERVER_IP"
echo "  Путь проекта: $SERVER_PROJECT_PATH"
echo "  Название сервиса PM2: $PM2_SERVICE_NAME"
echo "  Путь node: $NODE_PATH"

# ============================================
# ЗАГРУЗКА ФАЙЛОВ
# ============================================

title "Загрузка файлов на сервер"

FILES_TO_UPLOAD=(
    ".env.local"
    ".env"
    "./package.json"
    "./package-lock.json"
    "./public"
    ".next"
    "./node_modules"
)

RSYNC_CMD="rsync -arvpz --progress --delete ${FILES_TO_UPLOAD[@]} $SERVER_USER@$SERVER_IP:$SERVER_PROJECT_PATH"

log "Выполняю загрузку файлов..."

UPLOAD_START_TIME=$(date +%s)
if $RSYNC_CMD; then
    UPLOAD_END_TIME=$(date +%s)
    UPLOAD_DURATION=$((UPLOAD_END_TIME - UPLOAD_START_TIME))
    success "Файлы успешно загружены ($UPLOAD_DURATION сек)"
else
    error "Ошибка при загрузке файлов"
    exit 1
fi

# ============================================
# ПЕРЕЗАПУСК ПРИЛОЖЕНИЯ
# ============================================

title "Перезапуск приложения"

if [ -z "$PM2_SERVICE_NAME" ]; then
    info "PM2_SERVICE_NAME не указан, пропускаю перезапуск"
else
    RESTART_CMD="$NODE_PATH/node $NODE_PATH/pm2 restart $PM2_SERVICE_NAME"
    log "Выполняю перезапуск..."

    RESTART_START_TIME=$(date +%s)
    if ssh $SERVER_USER@$SERVER_IP " $RESTART_CMD"; then
        RESTART_END_TIME=$(date +%s)
        RESTART_DURATION=$((RESTART_END_TIME - RESTART_START_TIME))
        success "Приложение успешно перезапущено ($RESTART_DURATION сек)"
    else
        error "Ошибка при перезапуске приложения"
        exit 1
    fi
fi

# ============================================
# ЗАВЕРШЕНИЕ
# ============================================

title "Деплой завершен успешно"

echo -e "${GREEN}${BOLD}✅ Все задачи выполнены!${RESET}"
echo "Время начала: $(date -d @$SCRIPT_START_TIME '+%H:%M:%S')"
echo "Время завершения: $(date '+%H:%M:%S')"
echo "Общее время выполнения: $(get_elapsed_time)"
echo "Сервер: $SERVER_IP"

echo -e "${YELLOW}📊 Статистика выполнения:${RESET}"
echo "Загрузка файлов: $UPLOAD_DURATION сек"
if [ ! -z "$RESTART_DURATION" ]; then
    echo "Перезапуск приложения: $RESTART_DURATION сек"
fi
echo "Итого: $(get_elapsed_time)"

exit 0
