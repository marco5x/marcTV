import React from "react";
import { withServiceWorkerUpdater } from "@3m1/service-worker-updater";

const UpdaterVersion = (props) => {
  const { newServiceWorkerDetected, onLoadNewServiceWorkerAccept } = props;
  return (
    <>
      {newServiceWorkerDetected ? (
        <div
          className="mb-3 inline-flex w-full items-center rounded-lg bg-green-200 px-6 py-5 text-base text-green-700"
          role="alert"
        >
          <span className="mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fill-rule="evenodd"
                d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          {/* Aqui los comentarios sobre la nueva actualización*/}
          <p>
            ¡NUEVA VERSIÓN! v1.0.2 - 🆕 Actualizamos canales premium (directv
            figth y directv motor), 🆕 Mejora en control, 🆕 Guia de uso de web
            app
          </p>
          <button
            type="button"
            onClick={onLoadNewServiceWorkerAccept}
            className="inline-block rounded border-2 border-transp px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-white transition duration-150 ease-in-out hover:border-amber-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-white dark:hover:bg-green-500 ml-6"
          >
            Actualizar
          </button>
        </div>
      ) : null}
    </>
  );
};

export default withServiceWorkerUpdater(UpdaterVersion);
