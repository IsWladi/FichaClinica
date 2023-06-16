import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  userId: any = ""; // para acceder desde cualquier page al id del usuario logeado y usarlo para endpoints

  constructor(private http: HttpClient, private router:Router) { }

  // tabs
  // nueva cita
  async crearCita(motivo: string, especialidad: string, fecha: string) {
    let response:any = {};
    const url = 'http://localhost:8000/api/citas/agregar/'+this.userId;

    const body = {
      motivo: motivo,
      especialidad: especialidad,
      fecha: fecha
    };

    try {
      response = await this.http.post(url, body).toPromise();
      if (response["message"] == "Cita no creada, motivo debe ser unico" ){
        return 0;
      }
      return 1;
    } catch (error) {
      console.error('Error al crear nueva cita:', error);
      throw error;
    }
  }
  closeSesion(){
    this.userId = ""
    this.router.navigate(['/']);
  }

  // registrar usuario
  async registrarUsuario(usuario: string, contrasena: string) {
    const url = 'http://localhost:8000/api/users/register/';

    const body = {
      username: usuario,
      password: contrasena
    };

    try {
      const response = await this.http.post(url, body).toPromise();
      this.userId = response;
      return response;
    } catch (error) {
      console.error('Error al registrar usuario:', error);
      throw error; // Lanza una excepción para manejar el error en la función `register()`
    }
  }
// login usuario
async loginUsuario(usuario: string, contrasena: string) {
  const url = 'http://localhost:8000/api/users/login/';

  const body = {
    username: usuario,
    password: contrasena
  };

  try {
    const response = await this.http.post(url, body).toPromise();
    this.userId = response;
    return response; // Devuelve la respuesta obtenida desde el backend
  } catch (error) {
    console.error('Error al loguear usuario:', error);
    throw error; // Relanza el error para manejarlo en la función `login()`
  }
}

  getRemedios(): import("../model/remedios").Remedio[] {
    return [
            {
              remedio: "Paracetamol",
              motivo: "Dolor de cabeza",
              cantidad: 1,
              frecuencia_horas: 8,
              periodo_dias: 1,
              inicio: "2023-06-03",
              hora: "09:00",
              comentario: "Tomar con comida",
            },
            {
              remedio: "Ibuprofeno",
              motivo: "Dolor muscular",
              cantidad: 2,
              frecuencia_horas: 6,
              periodo_dias: 2,
              inicio: "2023-06-03",
              hora: "12:00",
              comentario: "No exceder la dosis diaria",
            },
            {
              remedio: "Omeprazol",
              motivo: "Acidez estomacal",
              cantidad: 1,
              frecuencia_horas: 24,
              periodo_dias: 1,
              inicio: "2023-06-03",
              hora: "20:00",
              comentario: "Tomar antes de dormir",
            },
]
  }
  getCitas(): import("../model/citas").Cita[] {
    return [
      {
        "especialidad": "dentista",
        "fecha": "2023-07-10",
        "hora": "10:00",
        "motivo": "limpieza preventiva"
      },
      {
        "especialidad": "cardiólogo",
        "fecha": "2023-07-12",
        "hora": "15:30",
        "motivo": "consulta de seguimiento"
      },
      {
        "especialidad": "oftalmólogo",
        "fecha": "2023-07-15",
        "hora": "09:45",
        "motivo": "examen de la vista"
      },
      {
        "especialidad": "ginecólogo",
        "fecha": "2023-07-18",
        "hora": "11:15",
        "motivo": "chequeo anual"
      },
      {
        "especialidad": "dermatólogo",
        "fecha": "2023-07-22",
        "hora": "14:00",
        "motivo": "revisión de lunares"
      },
      {
        "especialidad": "traumatólogo",
        "fecha": "2023-07-25",
        "hora": "16:30",
        "motivo": "evaluación de lesión en la rodilla"
      },
      {
        "especialidad": "pediatra",
        "fecha": "2023-07-26",
        "hora": "08:45",
        "motivo": "vacunación y control de crecimiento"
      },
      {
        "especialidad": "psicólogo",
        "fecha": "2023-07-28",
        "hora": "17:00",
        "motivo": "terapia individual"
      },
      {
        "especialidad": "endocrinólogo",
        "fecha": "2023-07-30",
        "hora": "12:30",
        "motivo": "ajuste de medicación"
      },
      {
        "especialidad": "neurólogo",
        "fecha": "2023-08-02",
        "hora": "10:30",
        "motivo": "evaluación de síntomas neurológicos"
      }
    ]

  }
  getUsers(){
    return this.http.get('http://localhost:8000/api/users').pipe(
      map((res: any) => {
        return res; // Retorna la respuesta JSON completa
      })
    );
  }
}
