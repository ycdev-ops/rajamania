
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { LockIcon } from "../icons/lock-icon";
import { Eye, EyeOff, Info } from "lucide-react";

export const ChangePasswordForm = () => {
    const [currentPasswordVisible, setCurrentPasswordVisible] = useState(false);
    const [newPasswordVisible, setNewPasswordVisible] = useState(false);
    const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    const PasswordInput = ({ label, id, visible, toggleVisibility }: { label: string, id: string, visible: boolean, toggleVisibility: () => void }) => (
        <div className="relative">
            <Label htmlFor={id}>{label}</Label>
            <LockIcon className="absolute left-3 top-9 h-4 w-4 text-muted-foreground" />
            <Input
                id={id}
                type={visible ? "text" : "password"}
                className="bg-secondary border-border pl-10 pr-10 mt-1"
            />
            <button
                type="button"
                onClick={toggleVisibility}
                className="absolute right-3 top-9 text-muted-foreground"
            >
                {visible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
        </div>
    );

    return (
        <form className="space-y-6 bg-card p-6 rounded-lg border border-border">
            <h3 className="font-bold text-primary pb-3 mb-4">GANTI PASSWORD</h3>
            <div className="space-y-4">
                <PasswordInput
                    label="Password saat ini"
                    id="current-password"
                    visible={currentPasswordVisible}
                    toggleVisibility={() => setCurrentPasswordVisible(!currentPasswordVisible)}
                />
                <PasswordInput
                    label="Password baru"
                    id="new-password"
                    visible={newPasswordVisible}
                    toggleVisibility={() => setNewPasswordVisible(!newPasswordVisible)}
                />
                <PasswordInput
                    label="Masukkan kembali Password baru"
                    id="confirm-password"
                    visible={confirmPasswordVisible}
                    toggleVisibility={() => setConfirmPasswordVisible(!confirmPasswordVisible)}
                />
            </div>
            <Alert className="bg-secondary/50 border-border text-muted-foreground">
                <Info className="h-4 w-4 text-primary" />
                <AlertDescription className="text-xs">
                    Password wajib memiliki minimal 8 karakter, dan wajib memiliki minimal 1 huruf dan 1 angka. Karakter spesial yang diperbolehkan adalah ! @ # $ % ^ * _ | .
                </AlertDescription>
            </Alert>
            <Button type="submit" className="w-full btn--success">Simpan</Button>
        </form>
    );
};
