import { useState } from "react";

const getNotification = () => {
  Notification.requestPermission().then((permission) => {
    if (permission === "granted") {
      new Notification(" 📢 Ya Comienza..!! ", {
        icon: "https://raw.githubusercontent.com/marco5x/marcTV/master/public/logo192.png",
        body: "🗣 Ya arranca el evento: agendado",
      });
    }
  });
};

export const Notifications = () => {
  const [value, setValue] = useState(new Date());

  const handleSubmit = (event) => {
    event.preventDefault();
    const forms = event.target;
    const formData = new FormData(forms);
    const id = crypto.randomUUID();
    const name = formData.get("name");
    const date = formData.get("date");
    const hour = formData.get("hour");
    const minute = formData.get("minute");

    console.log({ id, name, date, hour, minute });

    forms.reset();
  };
  //console.log(value);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <input type="date" name="date" />
        <input type="datetime" name="hour" min={0} />
        <input type="datetime" name="minute" min={0} />

        <button onClick={getNotification}>Guardar</button>
      </form>
    </div>
  );
};
