export interface ModalObject {
    titulo?: string;
    modal: any;
    tipo?: TipoModal;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
}

export type TipoModal = "nuevo" | "editar" | "ver";