import {
  View,
  Text,
  Pressable,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

import { StatusBar } from "expo-status-bar";
import { CustomButton } from "@/components/CustomButton";
import { Table, Row, Rows } from "react-native-table-component";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  const [data] = useState({
    tableHead: Array(30).fill("2"),
    tableData: [
      ["1", "2", "3", "4", "ee", "dd", "ddd"],
      ["a", "b", "c", "d", "ee", "dd", "ddd"],
      ["1", "2", "3", "456\n789", "ee", "dd", "ddd"],
      ["ass", "b", "c", "d", "ee", "dd", "ddd"],
    ],
  });
  return (
    <>
      <SafeAreaView>
        <CustomButton />
        <ScrollView style={{ marginTop: -1 }} horizontal>
          <Table borderStyle={{ borderWidth: 2, borderColor: "#c8e1ff" }}>
            <Row
              data={data.tableHead}
              style={styles.head}
              textStyle={styles.text}
            />
            <Rows data={data.tableData} textStyle={styles.text} />
          </Table>
        </ScrollView>
        <StatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  head: { height: 40, backgroundColor: "#f1f8ff" },
  text: { margin: 6 },
});
