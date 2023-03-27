import { cva, VariantProps } from 'class-variance-authority';

const boxStyles = cva([], {
  variants: {
    display: {
      flex: 'flex',
      block: 'block',
      'inline-block': 'inline-block',
      'inline-flex': 'inline-flex',
    },
    position: {
      relative: 'relative',
      absolute: 'absolute',
      fixed: 'fixed',
      static: 'static',
      sticky: 'sticky',
    },
    flexDirection: {
      row: 'flex-row',
      'row-reverse': 'flex-row-reverse',
      col: 'flex-col',
      'column-reverse': 'flex-col-reverse',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-md',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
    },
    width: {
      full: 'w-full',
      '1/2': 'w-1/2',
      '1/3': 'w-1/3',
      '2/3': 'w-2/3',
      '1/4': 'w-1/4',
      '3/4': 'w-3/4',
      '1/5': 'w-1/5',
      '2/5': 'w-2/5',
      '3/5': 'w-3/5',
      '4/5': 'w-4/5',
      '1/6': 'w-1/6',
      '5/6': 'w-5/6',
      '1/12': 'w-1/12',
      '11/12': 'w-11/12',
    },
  },
});

type BoxStylesProps = VariantProps<typeof boxStyles>;

export interface BoxProps extends BoxStylesProps {
  children: React.ReactNode;
  onClick?: (e: any) => void;
  key?: string | number;
  tw?: string;
}

const Box = ({ children, ...p }: BoxProps) => {
  return (
    <section
      onClick={p.onClick}
      className={`${boxStyles({ ...p })} ${p.tw ? p.tw : ''}`}
    >
      {children}
    </section>
  );
};

export default Box;
