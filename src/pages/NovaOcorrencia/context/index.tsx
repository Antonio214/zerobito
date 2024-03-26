import React, { useCallback } from "react";
import { createContext, useContext, useState } from "react";
import { CriarOcorrenciaWizardContextData, DenuncianteData, OcorrenciaFormData, GravidadeData, InformacoesBasicasData, VitimaData } from "../model";

export const CriarOcorrenciaWizardContext = createContext({} as CriarOcorrenciaWizardContextData);

export interface CriarOcorrenciaWizardContextProviderProps {
    children: React.ReactNode;
}

export function CriarOcorrenciaWizardContextProvider({ children }: CriarOcorrenciaWizardContextProviderProps) {
    const [formData, setFormData] = useState<OcorrenciaFormData>({
        informacoesBasicas: {
            data: new Date(),
            descricao: '',
            local: {
                estado: '',
                cidade: '',
                logradouro: '',
            }
        },
        vitima: {
            nome: '',
            nomeEmpresa: '',
            cnpjEmpresa: '',
            tomadoraDeServicoCNPJ: '',
            tomadoraDeServicoNome: '',
            vinculoEmpresa: '',
        },
        denunciante: {
            tipoDenuncia: '',
            nomeDenuncia: '',
            emailDenuncia: '',
            telefoneDenuncia: '',
            enderecoDenuncia: '',
            denunciaCustomizada: '',
        },
        gravidade: {
            obito: '',
            gravidade: '',
        },
    } as OcorrenciaFormData);

    const setInformacoesBasicas = useCallback((data: InformacoesBasicasData) => {
        console.log("Dados");
        console.log(data);
        setFormData({
            ...formData,
            informacoesBasicas: data
        });
    }, [formData])

    const setVitimaData = useCallback((data: VitimaData) => {
        console.log("Dados");
        console.log(data);
        setFormData({
            ...formData,
            vitima: data
        });
    }, [formData]);

    const setDenuncianteData = useCallback((data: DenuncianteData) => {
        console.log("Dados");
        console.log(data);
        setFormData({
            ...formData,
            denunciante: data
        });
    }, [formData]);

    const setGravidadeData = useCallback((data: GravidadeData) => {
        console.log("Dados");
        console.log(data);
        setFormData({
            ...formData,
            gravidade: data
        });
    }, [formData]);

    return (
        <CriarOcorrenciaWizardContext.Provider value={{ formData, setInformacoesBasicas, setVitimaData, setDenuncianteData, setGravidadeData }}>
            {children}
        </CriarOcorrenciaWizardContext.Provider>
    );
}

export function useOcorrenciaWizardContext() {
    return useContext(CriarOcorrenciaWizardContext);
}