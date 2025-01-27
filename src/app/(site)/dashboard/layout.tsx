
export const metadata = {
    title: "Painel do Site",
    description: "Esse é o painel demonstrativo do site"
}

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <h3>Header do dashboard</h3>
            <br />
            { children }
        </div>
    )
}