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

const enum Screen {
  Abilities = "Abilities",
  Attributes = "Attributes",
  Equipment = "Equipment",
  Main = "Main",
  Notes = "Notes",
  Profile = "Profile",
  Skills = "Skills",
  Spells = "Spells",
}

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen
          name={Screen.Main}
          component={MainScreen}
          options={{ title: "Статус" }}
        />
        <Drawer.Screen
          name={Screen.Profile}
          component={ProfileScreen}
          options={{ title: "Профиль" }}
        />
        <Drawer.Screen
          name={Screen.Attributes}
          component={AttributesScreen}
          options={{ title: "Характеристики" }}
        />
        <Drawer.Screen
          name={Screen.Skills}
          component={SkillsScreen}
          options={{ title: "Навыки" }}
        />
        <Drawer.Screen
          name={Screen.Abilities}
          component={AbilitiesScreen}
          options={{ title: "Черты и способности" }}
        />
        <Drawer.Screen
          name={Screen.Equipment}
          component={EquipmentScreen}
          options={{ title: "Снаряжение" }}
        />
        <Drawer.Screen
          name={Screen.Notes}
          component={NotesScreen}
          options={{ title: "Заметки" }}
        />
        <Drawer.Screen
          name={Screen.Spells}
          component={SpellsScreen}
          options={{ title: "Заклинания" }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
