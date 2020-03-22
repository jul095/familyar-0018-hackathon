import React from "react";
import { PickerColumn } from "@ionic/core";
import { IonPicker } from "@ionic/react";

/**
 * the component has three properties that are defined in this
 * interface since we are using typescript
 */
interface _Props {
  isOpen: boolean;
  onSave: Function;
  onCancel: Function;
}

const MemberColumn = {
  name: "Day",
  options: [
    { text: "Mutter", value: "Mutter" },
    { text: "Vater", value: "Vater" },
    { text: "Oma", value: "Oma" },
    { text: "Opa", value: "Opa" },
    { text: "Kind", value: "Kind" }
  ]
} as PickerColumn;

const MyPicker: React.FC<_Props> = ({ onSave, onCancel, isOpen }) => {
  return (
    <div>
      <IonPicker
        isOpen={isOpen}
        columns={[MemberColumn]}
        buttons={[
          {
            text: "Abbruch",
            role: "cancel",
            handler: value => {
              onCancel();
            }
          },
          {
            text: "Fertig",
            handler: value => {
              onSave(value);
            }
          }
        ]}
      ></IonPicker>
    </div>
  );
};

export default MyPicker;
