import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';
import { Button, ButtonProps } from './button';

export function AlertDialog({
    title = "Are you absolutely sure?",
    description = "This action cannot be undone.",
    buttonVariant,
    buttonText,
    buttonClassName,
    buttonSize,
    onConfirm,
}: {
    title?: string;
    description?: string;
    buttonVariant?: ButtonProps['variant'];
    onConfirm: () => void;
    buttonText: string;
    buttonClassName?: string;
    buttonSize?: ButtonProps['size'];
}) {
    return (
        <AlertDialogPrimitive.Root>
            <AlertDialogPrimitive.Trigger asChild>
                <Button variant={buttonVariant} className={buttonClassName} size={buttonSize}>
                    {buttonText}
                </Button>
            </AlertDialogPrimitive.Trigger>

            <AlertDialogPrimitive.Portal>
                <AlertDialogPrimitive.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" />
                <AlertDialogPrimitive.Content className="fixed top-1/2 left-1/2 z-50 max-w-md w-full p-6 bg-background border-border rounded-lg shadow-lg transform -translate-x-1/2 -translate-y-1/2">
                    <AlertDialogPrimitive.Title className="text-lg font-bold">
                        {title}
                    </AlertDialogPrimitive.Title>
                    <AlertDialogPrimitive.Description className="mt-2 text-sm text-gray-600">
                        {description}
                    </AlertDialogPrimitive.Description>
                    <div className="mt-4 flex justify-end gap-2">
                        <AlertDialogPrimitive.Cancel asChild>
                            <Button variant="outline">
                                Cancel
                            </Button>
                        </AlertDialogPrimitive.Cancel>
                        <AlertDialogPrimitive.Action asChild>
                            <Button variant="danger" onClick={onConfirm}>
                                Confirm
                            </Button>
                        </AlertDialogPrimitive.Action>
                    </div>
                </AlertDialogPrimitive.Content>
            </AlertDialogPrimitive.Portal>
        </AlertDialogPrimitive.Root>
    );
}
