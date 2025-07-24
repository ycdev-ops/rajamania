
export const WithdrawNotes = () => (
    <div className="bg-secondary p-4 rounded-lg border border-border">
        <h4 className="font-bold text-white mb-3">Catatan</h4>
        <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Waktu proses</span>
            <span className="text-white font-medium">2 Menit</span>
        </div>
        <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Withdraw minimal</span>
            <span className="text-white font-medium">Rp 50.000</span>
        </div>
        <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Withdraw maksimal</span>
            <span className="text-white font-medium">Rp 150.000.000</span>
        </div>
    </div>
);
