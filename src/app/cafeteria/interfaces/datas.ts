 export const Inventario  = [
    {
        "id": 1,
        "nombre": "Coca Cola",
        "cantidad": 10,
        "precio": 10,
    },
    {
        "id": 2,
        "nombre": "Pepsi",
        "cantidad": 10,
        "precio": 10,
    },
    {
        "id": 3,
        "nombre": "Fanta",
        "cantidad": 10,
        "precio": 10,
    }
];

export const Platillo = [

    {
        "id": "1",
        "nombre": "Tacos",
        "descripcion": "Tacos de carne",
        "precio": 10,
        "imagen": "",
        "categoria": "Entrante",
        "ingredientes": [
            {
                "value": "1",
                "id": 1,
                "text": "Filete de Pollo",
            },
            {
                "value": "1",
                "id": 2,
                "text": "Alpaca",
            }
        ]
    }

        ];

 export const Menu = [
    {
        "id": 1,
        "nombre": "Coca Cola",
        "descripcion": "Coca Cola",
        "imagen": "https://www.coca-cola.com/content/dam/journey/us/en/images/cc-logo-stacked-rgb.svg",
        "precio": 10,
        "categoria": "Bebidas",
        "ingredientes": [
            {
                "id": 1,
                "nombre": "Coca Cola",
                "cantidad": 10,
                "precio": 10,
                "descripcion": "Coca Cola",
            }
        ]
    },
    {
        "id": 2,
        "nombre": "Filete de Pollo",
        "descripcion": "Filete de Pollo",
        "imagen": "https://www.coca-cola.com/content/dam/journey/us/en/images/cc-logo-stacked-rgb.svg",
        "precio": 95,
        "categoria": "Plato Fuerte",
        "ingredientes": [
            {
                "id": 1,
                "nombre": "Filete de Pollo",
                "cantidad": 10,
                "precio": 10,
                "descripcion": "Filete de Pollo",
            },
            {
                "id": 2,
                "nombre": "aceitunas",
                "cantidad": 10,
                "precio": 10,
                "descripcion": "aceitunas",
            },
            {
                "id": 3,
                "nombre": "pimientos",
                "cantidad": 10,
                "precio": 5,
                "descripcion": "pimientos",
            },
            {
                "id": 4,
                "nombre": "papas",
                "cantidad": 10,
                "precio": 10,
                "descripcion": "papas",
            },
            {
                "id": 5,
                "nombre": "cebolla",
                "cantidad": 10,
                "precio": 10,
                "descripcion": "cebolla",
            },
            {
                "id": 6,
                "nombre": "tomate",
                "cantidad": 10,
                "precio": 10,
                "descripcion": "tomate",
            }
        ]
    }
];

 export const Mesa = [
    {
        "id": 1,
        "nombre": "Mesa 1",
        "estado": "Libre",
        "capacidad": 10,
    },
    {
        "id": 2,
        "nombre": "Mesa 2",
        "estado": "Libre",
        "capacidad": 10,
    },
    {
        "id": 3,
        "nombre": "Mesa 3",
        "estado": "Libre",
        "capacidad": 10,
    },

        ];

     export const Ordenes = [
        {
            "id": 1,
            "mesa": 1,
            "platillo": [
                {   
                    "value": "1",
                    "id": 1,
                    "text": "Filete de Pollo",
                },
                {
                    "value": "1",
                    "id": 2,
                    "text": "Coca Cola",
                }
            ]
        }];

         export const Personal = [
            {
                "id": 1,
                "nombre": "Juan",
                "apellido": "Perez",
                "dni": "12345678",
                "cargo": "Cocinero",
                "telefono": "12345678",
                "correo": "juan@juanes.com",
                "password": "12345678",
                "imagen": "https://www.coca-cola.com/content/dam/journey/us/en/images/cc-logo-stacked-rgb.svg",
                "fecha_nacimiento": "12/12/12",
                "fecha_ingreso": "12/12/12",
                "fecha_salida": "12/12/12",
                "estado": "Activo",
            },
            {
                "id": 2,
                "nombre": "Pedro",
                "dni": "12345678",
                "cargo": "Cocinero",
                "telefono": "12345678",
                "correo": "Pedro@juanes.com",
                "password": "12345678",
                "imagen": "https://www.coca-cola.com/content/dam/journey/us/en/images/cc-logo-stacked-rgb.svg",
                "fecha_nacimiento": "12/12/12",
                "fecha_ingreso": "12/12/12",
                "fecha_salida": "12/12/12",
                "estado": "Activo",
            }];


