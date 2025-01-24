import axios from 'axios'

interface UploadFileToStorageParams {
  file: File
}

interface UploadFileToStorageOptions {
  signal?: AbortSignal
}

export async function uploadFileToStorage(
  { file }: UploadFileToStorageParams,
  opts?: UploadFileToStorageOptions,
) {
  const data = new FormData()

  data.append('file', file)

  const response = await axios.post<{ url: string }>(
    `http://localhost:3333/uploads`,
    data,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      signal: opts?.signal,
    },
  )

  return response.data.url
}
