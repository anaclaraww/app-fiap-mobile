import { useState } from "react";
import { Alert } from "react-native";
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Image,
    Switch,
} from "react-native";

const LoginScreen: React.FC = () => {

    const [isNightPeriod, setIsNightPeriod] = useState(false);
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const handleLogin = () => {
        if (email === "admin" && senha === "123") {
            Alert.alert("Sucesso", "Logado com sucesso!");
        } else {
            Alert.alert("Erro", "Email ou senha inválidos!");
        }
    };

    return (
        <View style={styles.container} className="bg-gray-950">
            <View className="bg-white px-8 py-10 rounded-2xl shadow-md shadow-pink-950 ">

                <View className="items-center mb-10">
                    <Text className="text-3xl font-bold text-black">
                        Bem-vindo(a)!
                    </Text>

                    <Image
                        style={styles.logoFh}
                        source={require('../assets/logo_hf.png')}
                    />

                    <Text className="text-gray-500 text-center">
                        Conectando estudantes e conhecimentos
                    </Text>
                </View>

                <Text style={styles.label}>Email</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    textContentType="emailAddress"
                    keyboardType="email-address"
                    placeholder="Digite seu email..."
                    style={styles.input}
                    className="border border-gray-300 rounded-xl p-3 mb-4"
                />

                <Text style={styles.label}>Senha</Text>
                <TextInput
                    value={senha}
                    onChangeText={setSenha}
                    placeholder="Digite sua senha..."
                    secureTextEntry
                    style={styles.input}
                    className="border border-gray-300 rounded-xl p-3 mb-2"
                />

                <TouchableOpacity style={styles.row}>
                    <Text className="text-gray-800 font-medium">
                        Não possui conta? Criar...
                    </Text>
                    <Text className="text-blue-600 font-medium">
                        Esqueci minha senha
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    className="bg-pink-600 p-4 rounded-xl"
                    onPress={handleLogin}
                >
                    <Text className="text-white text-center font-bold text-lg">
                        Entrar
                    </Text>
                </TouchableOpacity>

                <View className="flex-row pt-3 items-center">
                    <Text>Manter logado?</Text>
                    <Switch
                        value={isNightPeriod}
                        onValueChange={setIsNightPeriod}
                        trackColor={{ false: '#ED145B', true: '#ED145B' }}
                        thumbColor={isNightPeriod ? '#363131f1' : '#fff'}
                    />
                </View>

            </View>
        </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 25,
        justifyContent: "center",
    },

    label: {
        fontWeight: "600",
        marginBottom: 6,
        color: "#374151",
    },

    input: {
        backgroundColor: "#fff",
    },

    button: {
        marginTop: 15,
    },

    logoFh: {
        width: 120,
        height: 100,
        marginTop: 5
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 15
    },
});
