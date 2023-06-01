import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  getCitas(): import("./model/citas").Cita[] {
    return [
      {
        "nombre": "dentista",
        "fecha": "2023-07-10",
        "hora": "10:00",
        "comentario": "limpieza preventiva"
      },
      {
        "nombre": "cardiólogo",
        "fecha": "2023-07-12",
        "hora": "15:30",
        "comentario": "consulta de seguimiento"
      },
      {
        "nombre": "oftalmólogo",
        "fecha": "2023-07-15",
        "hora": "09:45",
        "comentario": "examen de la vista"
      },
      {
        "nombre": "ginecólogo",
        "fecha": "2023-07-18",
        "hora": "11:15",
        "comentario": "chequeo anual"
      },
      {
        "nombre": "dermatólogo",
        "fecha": "2023-07-22",
        "hora": "14:00",
        "comentario": "revisión de lunares"
      },
      {
        "nombre": "traumatólogo",
        "fecha": "2023-07-25",
        "hora": "16:30",
        "comentario": "evaluación de lesión en la rodilla"
      },
      {
        "nombre": "pediatra",
        "fecha": "2023-07-26",
        "hora": "08:45",
        "comentario": "vacunación y control de crecimiento"
      },
      {
        "nombre": "psicólogo",
        "fecha": "2023-07-28",
        "hora": "17:00",
        "comentario": "terapia individual"
      },
      {
        "nombre": "endocrinólogo",
        "fecha": "2023-07-30",
        "hora": "12:30",
        "comentario": "ajuste de medicación"
      },
      {
        "nombre": "neurólogo",
        "fecha": "2023-08-02",
        "hora": "10:30",
        "comentario": "evaluación de síntomas neurológicos"
      }
    ]

  }
  getUsers(): import("./model/users").User[] {
    return [
            {
              "username": "Juan",
              "password": "123456",
            },{
              "username": "Luis",
              "password": "hola123",
            },{
              "username": "Juano",
              "password": "hola"
            },{
              "username": "admin",
              "password": "duoc123456",
            },{
              "username": "Luisa",
              "password": "hola1234"
            },{
              "username": "Juanito",
              "password": "salalala"
            }
    ]
  }

  constructor() { }
}
