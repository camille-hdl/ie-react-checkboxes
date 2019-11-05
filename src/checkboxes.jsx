//@flow
import React, { useState } from "react";

export default function Checkboxes(props: { numberOfCheckboxes: number }) {
    const { numberOfCheckboxes } = props;
    /**
     * Contient l'index des checkboxes cochées
     */
    const [checkedBoxes, setCheckedBoxes] = useState([]);

    if (numberOfCheckboxes <= 0) {
        return null;
    }
    /**
     * Créer un array [0, 1, ...numberOfCheckboxes],
     * pour pouvoir utiliser l'index des éléments comme "identifiant"
     */
    const displayedBoxes = [...Array.from({ length: numberOfCheckboxes }).keys()];
    /**
     * La première checkbox est cochée si toutes les checkbox affichées sont cochées
     */
    const allCheckboxesChecked = displayedBoxes.every(index => checkedBoxes.includes(index));
    return (
        <ul>
            <li>
                <input
                    type="checkbox"
                    checked={allCheckboxesChecked}
                    onChange={() => {
                        if (allCheckboxesChecked) {
                            /**
                             * Il faut enlever toutes les checkboxes visibles de la sélection
                             */
                            setCheckedBoxes(checkedBoxes.filter(index => !displayedBoxes.includes(index)));
                        } else {
                            /**
                             * Il faut ajouter toutes les checkboxes visibles à la sélection,
                             * sauf si elles y sont déjà
                             */
                            setCheckedBoxes([
                                ...checkedBoxes.filter(index => !displayedBoxes.includes(index)),
                                ...displayedBoxes,
                            ]);
                        }
                    }}
                    data-cy="check-all"
                    id="check-all"
                />
                <label htmlFor="check-all">
                    <strong>Tout cocher</strong>
                </label>
            </li>
            {displayedBoxes.map(index => (
                <li key={index}>
                    <input
                        type="checkbox"
                        checked={checkedBoxes.includes(index)}
                        onChange={() => {
                            if (checkedBoxes.includes(index)) {
                                /**
                                 * Enlever la checkbox de la sélection
                                 */
                                setCheckedBoxes(checkedBoxes.filter(checkedIndex => checkedIndex !== index));
                            } else {
                                /**
                                 * Ajouter la checkbox à la sélection
                                 */
                                setCheckedBoxes([...checkedBoxes, index]);
                            }
                        }}
                        data-cy={`checkbox-${index}`}
                        id={`checkbox-${index}`}
                    />
                    <label htmlFor={`checkbox-${index}`}>{index + 1}</label>
                </li>
            ))}
        </ul>
    );
}
