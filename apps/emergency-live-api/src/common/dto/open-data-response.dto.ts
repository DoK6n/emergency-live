type Pagination = {
  rowCount: number
  page: number
  totalCount: number
}

export class OpenDataResponseDto<T> {
  constructor(
    public readonly data: T,
    public readonly pagination: Pagination,
  ) {}

  static from<T>(data: T, pagination: Pagination) {
    return new OpenDataResponseDto(data, pagination)
  }

  static extractItem<T>(openData: OpenDataApiResponse<T>) {
    return openData.response.body.items.item
  }

  static pagination(openData: OpenDataApiResponse<unknown>): Pagination {
    return {
      rowCount: openData.response.body.numOfRows,
      page: openData.response.body.pageNo,
      totalCount: openData.response.body.totalCount,
    }
  }
}

export interface OpenDataApiResponse<T> {
  response: {
    header: {
      resultCode: number
      resultMsg: string
    }
    body: {
      items: {
        item: T
      }
      numOfRows: number
      pageNo: number
      totalCount: number
    }
  }
}
