export const myError = {
  async stringify(response: Response) {
    const errorText = await response.text()
    throw new Error(`${response.status}?${errorText}`)
  },
  parse(error: string): { status: number, message: string } {
    const [status, message] = error.split('?')
    return { status: Number(status), message }
  }
}