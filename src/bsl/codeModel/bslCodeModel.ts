import { BaseSymbol } from "@/common/codeModel/base";
import { FunctionDefinition, ProcedureDefinition } from "./definitions";
import { Method } from "@/common/codeModel";

export class BslCodeModel {
    children: BaseSymbol[] = []

    get methods(){
        return this.children
        .map(c => c instanceof ProcedureDefinition || c instanceof FunctionDefinition ? c as Method : undefined)
        .filter(c => c) as Method[]
    }
}