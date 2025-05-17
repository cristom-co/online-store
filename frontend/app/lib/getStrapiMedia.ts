
export function getStrapiMedia(media: any): string {
    return media ? process.env.NEXT_PUBLIC_CMS_API_URL + media.url : '/default-images/banner-hero.jpg';
}