import AppLayoutShell from "components/AppLayoutShell";

export default function AccessDenied(props)
{
    return (
        <AppLayoutShell>
            <div className="access-denied">
                <h1>Access denied</h1>
                <p>You are not allowed to access this page.</p>
            </div>
        </AppLayoutShell>
    );
}