import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import "react-native-gesture-handler";

import { AbilitiesScreen } from "./src/screens/AbilitiesScreen";
import { AttributesScreen } from "./src/screens/AttributesScreen";
import { EquipmentScreen } from "./src/screens/EquipmentScreen";
import { MainScreen } from "./src/screens/MainScreen";
import { NotesScreen } from "./src/screens/NotesScreen";
import { ProfileScreen } from "./src/screens/ProfileScreen";
import { SkillsScreen } from "./src/screens/SkillsScreen";
import { SpellsScreen } from "./src/screens/SpellsScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen
          name="Main"
          component={MainScreen}
          options={{ title: "Статус" }}
        />
        <Drawer.Screen
          name="Profile"
          component={ProfileScreen}
          options={{ title: "Профиль" }}
        />
        <Drawer.Screen
          name="Attributes"
          component={AttributesScreen}
          options={{ title: "Характеристики" }}
        />
        <Drawer.Screen
          name="Skills"
          component={SkillsScreen}
          options={{ title: "Навыки" }}
        />
        <Drawer.Screen
          name="Abilities"
          component={AbilitiesScreen}
          options={{ title: "Черты и способности" }}
        />
        <Drawer.Screen
          name="Equipment"
          component={EquipmentScreen}
          options={{ title: "Снаряжение" }}
        />
        <Drawer.Screen
          name="Notes"
          component={NotesScreen}
          options={{ title: "Заметки" }}
        />
        <Drawer.Screen
          name="Spells"
          component={SpellsScreen}
          options={{ title: "Заклинания" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
