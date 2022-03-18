import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
    PokemonProvider,
    ErrorProvider,
} from "./src/components/Contexts";
import HomePage from "./src/pages/HomePage";
import InfoPage from "./src/pages/InfoPage";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar barStyle="light-content" backgroundColor={"#1C488D"} />
            <NavigationContainer>
                <PokemonProvider>
                    <ErrorProvider>
                        <Stack.Navigator>
                            <Stack.Screen
                                name="Home"
                                component={HomePage}
                                options={{ headerShown: false }}
                            />
                            <Stack.Screen name="About" component={InfoPage} />
                        </Stack.Navigator>
                    </ErrorProvider>
                </PokemonProvider>
            </NavigationContainer>
        </>
    );
}
