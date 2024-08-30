import React from 'react'; 
import { Menubar } from 'primereact/menubar';
import '../style/Header.css'; // Importação do arquivo CSS personalizado

export default function BasicDemo() {
    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home'
        },
        {
            label: 'Perfil',
            icon: 'pi pi-star'
        },
        {
            label: 'Projetos',
            icon: 'pi pi-search',
            items: [
                
                {
                    label: 'Weg',
                    icon: 'pi pi-palette',
                },
                {
                    label: 'Mobile',
                    icon: 'pi pi-palette',
                },
                {
                    label: 'Back End',
                    icon: 'pi pi-palette',
                },
                {
                    label: 'Analise de Dados',
                    icon: 'pi pi-palette',
                },
            ]
        },
        {
            label: 'Contato',
            icon: 'pi pi-envelope'
        }
    ];

    

    return (
        <div className="card custom-menubar">
            <Menubar model={items} />
        </div>
    )
}
