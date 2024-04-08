import { createAsyncThunk } from "@reduxjs/toolkit"
import { setMessage } from "./redux/feature/toast/toastSlice"
import { failure, success } from "./constant/data"

export const getToastPayload = (
  msg,
  type,
  fieldMSG
) => {
  const payload = {
    message: fieldMSG ? `${msg} - ${fieldMSG}` : msg,
    type: type,
  }
  return payload
}

export const createAsyncThunkForSlice = (
  type,
  resolver,
  options
) =>
  createAsyncThunk(
    type,
    async (payload, { dispatch, rejectWithValue }) => {
      try {
        const res = await resolver(payload)
        if (res?.status === 200) {
          options?.isToast &&
            dispatch(
              setMessage(
                getToastPayload(res.data.msg, success)
              )
            )
          // set toast notifaction msg for response
          return res.data
        } else if (res?.status === 401) {

          dispatch(
            setMessage({
              message: 'Your session has been expired, please login again.',
              type: failure,
            })
          )
          setTimeout(() => {
            localStorage.clear()
            window.location.href = '/login'
          }, 1000)

          throw new Error(res?.error[0].message)
        } else {

          options?.isToast &&
            dispatch(
              setMessage(
                getToastPayload(
                  res?.error[0].message ?? 'Something Went Wrong',
                  failure
                )
              )
            )
          // set toast notifaction msg for response
          throw new Error(res?.error[0].message)
        }
      } catch (error) {

        options?.isToast &&
          dispatch(
            setMessage(getToastPayload('Something Went Wrong', failure))
          )

        return rejectWithValue(error.message)
      }
    }
  )

export default createAsyncThunkForSlice