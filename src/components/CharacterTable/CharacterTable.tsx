import Table from '../common/Table/Table'

import { Character } from '../../types/character'

interface CharacterTableProps {
    characters: Character[]
}

const CharacterTable = ({ characters }: CharacterTableProps) => {
    return (
        <Table>
            <thead>
                <tr>
                    <th data-testid="character-name">Name</th>
                    <th data-testid="character-height">Height</th>
                    <th data-testid="character-mass">Mass</th>
                    <th data-testid="character-hair">Hair Color</th>
                    <th data-testid="character-skin">Skin Color</th>
                    <th data-testid="character-eye">Eye Color</th>
                    <th data-testid="character-birth">Birth Year</th>
                    <th data-testid="character-gender">Gender</th>
                </tr>
            </thead>
            <tbody>
                {characters.map((character: Character) => (
                    <tr key={character.name}>
                        <td>{character.name}</td>
                        <td>{character.height}</td>
                        <td>{character.mass}</td>
                        <td>{character.hair_color}</td>
                        <td>{character.skin_color}</td>
                        <td>{character.eye_color}</td>
                        <td>{character.birth_year}</td>
                        <td>{character.gender}</td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

export default CharacterTable
