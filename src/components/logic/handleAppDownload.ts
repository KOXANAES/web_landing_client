import AuthStore from '../../store/AuthStore';

export const handleAppDownload = async (authStore: AuthStore): Promise<void> => {
    try {
        const response = await authStore.getApp();
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');   
        link.href = url;
        link.setAttribute('download', 'embera.apk');
        document.body.appendChild(link);
        link.click();
        link.remove();
        URL.revokeObjectURL(url);
    } catch (error) {
        console.error('Ошибка при скачивании приложения:', error);
    }
};