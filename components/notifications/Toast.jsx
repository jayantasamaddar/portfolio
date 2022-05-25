import { useState, createContext, useContext } from 'react';
import { createPortal } from 'react-dom';
import { MdCheckCircle, MdError, MdInfo, MdClose } from 'react-icons/md';

export const ToastContext = createContext();

const { toastVisibility } = useContext(ToastContext);

const Toast = ({ type, children }) => {
  // const [toastVisibility, setToastVisibility] = useState(true);

  return (
    toastVisibility && (
      <div
        className={`toast relative py-4 shadow-xl border w-[600px] ml-auto mr-auto border-l-8 border-l-${
          type === 'success'
            ? 'green-600'
            : type === 'error'
            ? 'red-600'
            : 'blue-600'
        }`}
      >
        <div className="toast__content flex items-center px-10 gap-6">
          <div className="toast__content--icon">
            {type === 'success' ? (
              <MdCheckCircle size="2em" className="text-green-600" />
            ) : type === 'error' ? (
              <MdError size="2em" className="text-red-600" />
            ) : (
              <MdInfo size="2em" className="text-blue-600" />
            )}
          </div>
          <div className="toast__content--text flex flex-col justify-center gap-1">
            <h6>
              {type === 'success'
                ? 'Success!'
                : type === 'error'
                ? 'Error!'
                : 'Info'}
            </h6>
            <p className="text-sm text-slate-600">{children}</p>
          </div>
        </div>
        <div
          className="toast__close absolute top-4 right-4 cursor-pointer"
          onClick={() => setToastVisibility(false)}
        >
          <MdClose
            size="1.5em"
            className="text-slate-600 hover:text-slate-800"
          />
        </div>
      </div>
    )
  );
};

export default Toast;
