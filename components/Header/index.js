import styled from "styled-components";
import styles from "./styles.js";
import { Styled } from "../../helpers/mixin";

const Header = ({ className }) => {
  return (
    <div className={ className }>
      我是超酷 header
    </div>
  );
}

export default Styled(Header, styles);