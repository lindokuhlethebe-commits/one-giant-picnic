"use client";

import { triggerConceptAlert } from "./ConceptModal";

interface ConceptLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

export function ConceptLink({ children, ...props }: ConceptLinkProps) {
  return (
    <a {...props} href="#" onClick={triggerConceptAlert}>
      {children}
    </a>
  );
}

interface ConceptButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function ConceptButton({ children, ...props }: ConceptButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    triggerConceptAlert(e);
    if (props.onClick) props.onClick(e);
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}
