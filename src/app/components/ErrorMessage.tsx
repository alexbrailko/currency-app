import { Alert, AlertDescription } from './ui/alert';

interface ErrorMessageProps {
  message: string;
}

export function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <Alert variant="destructive" className="mb-4">
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
