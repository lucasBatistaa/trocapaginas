import { ActivityIndicator } from "react-native";
import { styles } from "./style";
import { THEME } from "../../styles/Theme";

export default function Loading() {
    return (
        <ActivityIndicator color={THEME.colors.brownDark} style={styles.loading} />
    )
}
