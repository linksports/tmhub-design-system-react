import { PanelProps } from './Panel.types';
import { panel } from './Panel.css';
import Box from '../Box';

const Panel: React.FC<PanelProps> = (props) => {
  const {
    p = 3,
    children,
    ...others
  } = props;

  return (
    <Box p={p} {...others} asChild>
      <div className={panel({
      })}>
        {children}
      </div>
    </Box>
  );
};

export default Panel;
