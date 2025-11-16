import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import ClientesScreen from './screens/ClientesScreen';
import AgendaScreen from './screens/AgendaScreen';
import HomeScreen from './screens/HomeScreen';
import { initDatabase } from './utils/database';
import NotificationService from './utils/PushNotification';

const Tab = createBottomTabNavigator();

const App: React.FC = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    async function bootstrap() {
      try {
        await initDatabase();
        await NotificationService.configure();
      } catch (e) {
        console.warn('Erro na inicialização:', e);
      } finally {
        setReady(true);
      }
    }
    bootstrap();
  }, []);

  if (!ready) {
    return (
      <View style={[styles.container, { justifyContent: 'center' }]}> 
        <ActivityIndicator size="large" color="#E07A9D" />
        <Text style={{ marginTop: 12, color: '#E07A9D' }}>Carregando...</Text>
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              let name = 'home-outline';
              if (route.name === 'Agenda') name = 'calendar-outline';
              if (route.name === 'Clientes') name = 'people-outline';
              return (
                <View style={focused ? styles.iconWrapActive : styles.iconWrap}>
                  <Ionicons name={name} size={22} color={focused ? '#fff' : color} />
                </View>
              );
            },
            tabBarActiveTintColor: '#E07A9D',
            tabBarInactiveTintColor: '#8a8a8a',
            tabBarShowLabel: false,
            tabBarStyle: {
              position: 'absolute',
              height: 76,
              marginHorizontal: 12,
              marginBottom: 12,
              borderRadius: 20,
              backgroundColor: '#FFFFFF',
              borderTopWidth: 0,
              elevation: 10,
              shadowColor: '#000',
              shadowOpacity: 0.08,
              shadowOffset: { width: 0, height: -6 },
              shadowRadius: 16,
              paddingHorizontal: 8,
            },
            tabBarLabelStyle: { fontSize: 12, marginBottom: 6, fontWeight: '600' },
            tabBarItemStyle: { paddingTop: 6 },
          })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Agenda" component={AgendaScreen} />
        <Tab.Screen name="Clientes" component={ClientesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FADADD',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#E07A9D',
    marginBottom: 40,
  },
  botao: {
    backgroundColor: '#F4A7B9',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  iconWrapActive: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E07A9D',
    shadowColor: '#E07A9D',
    shadowOpacity: 0.12,
    shadowOffset: { width: 0, height: 6 },
    shadowRadius: 12,
  },
});
