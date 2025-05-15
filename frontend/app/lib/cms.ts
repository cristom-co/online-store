import axios from 'axios';

const CMS_API_URL = process.env.CMS_API_URL;
const CMS_API_TOKEN = process.env.CMS_API_TOKEN;

// Configuración para las peticiones al CMS
const cmsClient = axios.create({
  baseURL: CMS_API_URL,
  headers: {
    Authorization: `Bearer ${CMS_API_TOKEN}`,
  },
});

export async function getAllProducts() {
  try {
    const response = await cmsClient.get('/products');
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener productos:', error);
    return [];
  }
}

export async function getProductBySlug(slug : string) {
  try {
    const response = await cmsClient.get(`/products?filters[slug][$eq]=${slug}`);
    return response.data.data[0] || null;
  } catch (error) {
    console.error(`Error al obtener producto ${slug}:`, error);
    return null;
  }
}

export async function getFeaturedProducts() {
  try {
    const response = await cmsClient.get('/products?filters[featured][$eq]=true');
    return response.data.data;
  } catch (error) {
    console.error('Error al obtener productos destacados:', error);
    return [];
  }
}

export async function getProductsByCategory(categorySlug: string) {
  try {
    const response = await cmsClient.get(`/products?filters[category][slug][$eq]=${categorySlug}`);
    return response.data.data;
  } catch (error) {
    console.error(`Error al obtener productos de la categoría ${categorySlug}:`, error);
    return [];
  }
}