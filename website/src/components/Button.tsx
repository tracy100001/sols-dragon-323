type Props = {
  label: string;
  variant?: string;
};

export const Button = ({ label, variant = "primary" }: Props) => (
  <button className={`btn btn-${variant}`}>{label}</button>
);
