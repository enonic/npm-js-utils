export interface FieldObject {
	boost?: number;
	field: string;
}

type Field = (string | FieldObject);
export type Fields = (Field | Field[]);
