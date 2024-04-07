const AuthLayout = ( { children }: { children: React.ReactNode } ) => {
    return (
        <div className="flex h-dvh items-center justify-center
        bg-auth bg-cover bg-zinc-500 bg-blend-multiply">
            {children}
        </div>
    );
}

export default AuthLayout;
