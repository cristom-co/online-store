import axios from 'axios';

if (!process.env.NEXT_PUBLIC_CMS_API_URL) {
  throw new Error('La variable de entorno NEXT_PUBLIC_CMS_API_URL no está definida');
}
if (!process.env.CMS_API_TOKEN) {
  throw new Error('La variable de entorno CMS_API_TOKEN no está definida');
}     

const CMS_API_URL = process.env.NEXT_PUBLIC_CMS_API_URL + '/api';
const CMS_API_TOKEN = process.env.CMS_API_TOKEN;

// Configuración para las peticiones al CMS
const cmsClient = axios.create({
  baseURL: CMS_API_URL,
  headers: {
    Authorization: `Bearer ${CMS_API_TOKEN}`,
  },
});

export async function getHomePageData() {

  try {
    const response = await cmsClient.get('/home');
    return response.data;
  }
  catch (error) {
    console.error('Error al obtener datos de la página de inicio:', error);
    return {
      categories: [],
      features: [],
    };
  }
}

export async function getAllProducts() {
  try {
    const response = await cmsClient.get('/products');
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
}
