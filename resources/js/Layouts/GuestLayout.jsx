import { Head } from '@inertiajs/react';

export default function GuestLayout({ children, title = 'Laravel' }) {
    return (
        <>
            <Head title={title} />
            <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 dark:bg-gray-900">
                <div>
                    <a href="/">
                        <svg className="w-20 h-20 fill-current text-gray-500" viewBox="0 0 62 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="m61.1409 12.4517-24.29-7.0808c-.4493-.1308-.9562-.1308-1.4055 0L11.1568 12.4517c-.5369.1567-.906.6523-.906 1.2169v37.8628c0 .5646.3691 1.0602.906 1.2169l24.29 7.0808c.4493.1308.9562.1308 1.4055 0l24.29-7.0808c.5369-.1567.906-.6523.906-1.2169V13.6686c0-.5646-.3691-1.0602-.906-1.2169Z" />
                        </svg>
                    </a>
                </div>

                <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white dark:bg-gray-800 shadow-md overflow-hidden sm:rounded-lg">
                    {children}
                </div>
            </div>
        </>
    );
}
