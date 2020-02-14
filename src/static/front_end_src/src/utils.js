export const DATA_STATUSES = {
  UN_TOUCHED: 'UN_TOUCHED',
  REQUESTING: 'REQUESTING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR'
}

export const isLoad = (status) => status === DATA_STATUSES.REQUESTING || status === DATA_STATUSES.UN_TOUCHED
export const isRequesting = (status) => status === DATA_STATUSES.REQUESTING
export const isSuccess = (status) => status === DATA_STATUSES.SUCCESS
export const isError = (status) => status === DATA_STATUSES.ERROR
export const isUntouched = (status) => status === DATA_STATUSES.UN_TOUCHED
