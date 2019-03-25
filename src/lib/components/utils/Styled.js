import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';

export default function createStyled(styles, options) {
    function Styled(props) {
      const { children, ...other } = props;
      return children(other);
    }
    Styled.propTypes = {
      children: PropTypes.func.isRequired,
      classes: PropTypes.object.isRequired,
    };
    return withStyles(styles, options)(Styled);
  }