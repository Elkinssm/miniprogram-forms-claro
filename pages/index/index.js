Page({
  data: {
    array: ["México", "Estados Unidos", "Canadá"],
    objectArray: [
      {
        id: 0,
        name: "México"
      },
      {
        id: 1,
        name: "Estados Unidos"
      },
      {
        id: 2,
        name: "Canadá"
      }
    ],
    arrIndex: 0,
    index: 0,

    paises: [
      { name: "china", value: "China" },
      { name: "colombia", value: "Colombia", checked: true },
      { name: "argentina", value: "Argentina", disabled: true }
    ],
    sexo: [
      { name: "masculino", value: "Masculino" },
      { name: "femenino", value: "Femenino" },
      { name: "otros", value: "Otro" }
    ]
  },

  bindPickerChange(e) {
    this.setData({
      index: e.detail.value
    });
  },
  bindObjPickerChange(e) {
    this.setData({
      arrIndex: e.detail.value
    });
  }
});
