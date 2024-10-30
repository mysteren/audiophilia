import { ApiResponseError } from './errors'
import { type QueryMethod } from './types'

export { ApiResponseError } from './errors'
export * from './types'

export abstract class BaseHttpClient {
  protected abstract baseUrl: string
  protected abstract getAuthHeaders: () => HeadersInit

  protected jsonHeaders: HeadersInit = {
    'Content-Type': 'application/json'
  }

  protected convertBody(body: unknown) {
    return JSON.stringify(body)
  }

  protected async query<T, K>(url: string, method: QueryMethod, body?: T): Promise<K> {
    const resp = await fetch(`${this.baseUrl}${url}`, {
      method,
      headers: { ...this.jsonHeaders, ...this.getAuthHeaders() },
      body: this.convertBody(body)
    })
    const result = await resp.json()

    // console.log(resp);

    if (resp.ok) {
      return result as K
    }

    throw new ApiResponseError(result)
  }

  protected async queryMultipart<K>(url: string, method: QueryMethod, body: FormData): Promise<K> {
    const resp = await fetch(`${this.baseUrl}${url}`, {
      method,
      headers: { ...this.getAuthHeaders() },
      body: body
    })
    const result = await resp.json()
    if (resp.ok) {
      return result as K
    }

    throw new ApiResponseError(result)
  }

  public get<T>(url: string) {
    return this.query<undefined, T>(url, 'GET')
  }

  public post<T, K>(url: string, payload: T) {
    return this.query<T, K>(url, 'POST', payload)
  }

  public patch<T, K>(url: string, payload: T) {
    return this.query<T, K>(url, 'PATCH', payload)
  }

  public delete<T>(url: string) {
    return this.query<undefined, T>(url, 'DELETE')
  }

  public upload<T>(url: string, data: FormData, method: QueryMethod = 'POST') {
    return this.queryMultipart<T>(url, method, data)
  }
}