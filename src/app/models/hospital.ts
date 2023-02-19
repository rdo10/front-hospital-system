export interface Hospital{
    id?: number;
    nombre: string;
    ciudad: string;
    telefono: number;
    direccion: string;
    nit:number;
}

export interface HospitalDto extends Partial<Hospital>{}