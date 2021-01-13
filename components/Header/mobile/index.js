import BaseHeader from "../index";
import styles from "./styles";
import { Styled } from "../../../helpers/mixin";

const MobileHeader = Styled(BaseHeader, styles);
console.log(MobileHeader);
export default MobileHeader;
