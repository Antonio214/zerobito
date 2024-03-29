import { useState, useEffect } from 'react';
import { carregarUsuarios } from '../../common/models/user/get.user';

const usePainelViewModel = () => {
    const [usuarios, setUsuarios] = useState<unknown[]>([]);

    useEffect(() => {
        carregarUsuarios().then((response) => {
            setUsuarios(response.data);
        });
    }, []);

    return {
        usuarios
    };
};

export default usePainelViewModel;
