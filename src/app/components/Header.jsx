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
            label: 'Orçamento',
            icon: 'pi pi-shop',
            items: [
                
                {
                    label: 'Web',
                    icon: 'pi pi-globe',
                },
                {
                    label: 'Software',
                    icon: 'pi pi-desktop',
                },
                {
                    label: 'Mobile',
                    icon: 'pi pi-mobile',
                },
                {
                    label: 'Back End',
                    icon: 'pi pi-server',
                },
                {
                    label: 'Analise de Dados',
                    icon: 'pi pi-chart-pie',
                },
            ]
        },
        {
            label: 'Perfil',
            icon: 'pi pi-user'
        },
        {
            label: 'carrinho',
            icon: 'pi pi-shopping-cart'
        }
    ];

    

    return (
        <div className="card custom-menubar">
            <Menubar model={items} />
        </div>
    )
}
