/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
    BaseContract,
    BigNumber,
    BigNumberish,
    BytesLike,
    CallOverrides,
    ContractTransaction,
    Overrides,
    PopulatedTransaction,
    Signer,
    utils,
} from "ethers";
import type { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
    TypedEventFilter,
    TypedEvent,
    TypedListener,
    OnEvent,
    PromiseOrValue,
} from "./common";

export interface ERC20Interface extends utils.Interface {
    functions: {
        "allowance(address,address)": FunctionFragment;
        "almond()": FunctionFragment;
        "approve(address,uint256)": FunctionFragment;
        "balanceOf(address)": FunctionFragment;
        "campaignNft()": FunctionFragment;
        "claimed(address)": FunctionFragment;
        "decimals()": FunctionFragment;
        "decreaseAllowance(address,uint256)": FunctionFragment;
        "faucet()": FunctionFragment;
        "goodluck()": FunctionFragment;
        "increaseAllowance(address,uint256)": FunctionFragment;
        "initialize(address,address,address)": FunctionFragment;
        "mintToInsuranceFund(address)": FunctionFragment;
        "name()": FunctionFragment;
        "owner()": FunctionFragment;
        "peanut()": FunctionFragment;
        "renounceOwnership()": FunctionFragment;
        "setWhitelist(address[],bool[])": FunctionFragment;
        "symbol()": FunctionFragment;
        "totalSupply()": FunctionFragment;
        "transfer(address,uint256)": FunctionFragment;
        "transferFrom(address,address,uint256)": FunctionFragment;
        "transferOwnership(address)": FunctionFragment;
        "whitelist(address)": FunctionFragment;
    };

    getFunction(
        nameOrSignatureOrTopic:
            | "allowance"
            | "almond"
            | "approve"
            | "balanceOf"
            | "campaignNft"
            | "claimed"
            | "decimals"
            | "decreaseAllowance"
            | "faucet"
            | "goodluck"
            | "increaseAllowance"
            | "initialize"
            | "mintToInsuranceFund"
            | "name"
            | "owner"
            | "peanut"
            | "renounceOwnership"
            | "setWhitelist"
            | "symbol"
            | "totalSupply"
            | "transfer"
            | "transferFrom"
            | "transferOwnership"
            | "whitelist"
    ): FunctionFragment;

    encodeFunctionData(
        functionFragment: "allowance",
        values: [PromiseOrValue<string>, PromiseOrValue<string>]
    ): string;
    encodeFunctionData(functionFragment: "almond", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "approve",
        values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string;
    encodeFunctionData(functionFragment: "balanceOf", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "campaignNft", values?: undefined): string;
    encodeFunctionData(functionFragment: "claimed", values: [PromiseOrValue<string>]): string;
    encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "decreaseAllowance",
        values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string;
    encodeFunctionData(functionFragment: "faucet", values?: undefined): string;
    encodeFunctionData(functionFragment: "goodluck", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "increaseAllowance",
        values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string;
    encodeFunctionData(
        functionFragment: "initialize",
        values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<string>]
    ): string;
    encodeFunctionData(
        functionFragment: "mintToInsuranceFund",
        values: [PromiseOrValue<string>]
    ): string;
    encodeFunctionData(functionFragment: "name", values?: undefined): string;
    encodeFunctionData(functionFragment: "owner", values?: undefined): string;
    encodeFunctionData(functionFragment: "peanut", values?: undefined): string;
    encodeFunctionData(functionFragment: "renounceOwnership", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "setWhitelist",
        values: [PromiseOrValue<string>[], PromiseOrValue<boolean>[]]
    ): string;
    encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
    encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
    encodeFunctionData(
        functionFragment: "transfer",
        values: [PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string;
    encodeFunctionData(
        functionFragment: "transferFrom",
        values: [PromiseOrValue<string>, PromiseOrValue<string>, PromiseOrValue<BigNumberish>]
    ): string;
    encodeFunctionData(
        functionFragment: "transferOwnership",
        values: [PromiseOrValue<string>]
    ): string;
    encodeFunctionData(functionFragment: "whitelist", values: [PromiseOrValue<string>]): string;

    decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "almond", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "campaignNft", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "claimed", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "decreaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "faucet", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "goodluck", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "increaseAllowance", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "mintToInsuranceFund", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "peanut", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "renounceOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "setWhitelist", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "transferOwnership", data: BytesLike): Result;
    decodeFunctionResult(functionFragment: "whitelist", data: BytesLike): Result;

    events: {
        "Approval(address,address,uint256)": EventFragment;
        "Initialized(uint8)": EventFragment;
        "OwnershipTransferred(address,address)": EventFragment;
        "Transfer(address,address,uint256)": EventFragment;
    };

    getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
    getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export interface ApprovalEventObject {
    owner: string;
    spender: string;
    value: BigNumber;
}
export type ApprovalEvent = TypedEvent<[string, string, BigNumber], ApprovalEventObject>;

export type ApprovalEventFilter = TypedEventFilter<ApprovalEvent>;

export interface InitializedEventObject {
    version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface OwnershipTransferredEventObject {
    previousOwner: string;
    newOwner: string;
}
export type OwnershipTransferredEvent = TypedEvent<
    [string, string],
    OwnershipTransferredEventObject
>;

export type OwnershipTransferredEventFilter = TypedEventFilter<OwnershipTransferredEvent>;

export interface TransferEventObject {
    from: string;
    to: string;
    value: BigNumber;
}
export type TransferEvent = TypedEvent<[string, string, BigNumber], TransferEventObject>;

export type TransferEventFilter = TypedEventFilter<TransferEvent>;

export interface ERC20 extends BaseContract {
    connect(signerOrProvider: Signer | Provider | string): this;
    attach(addressOrName: string): this;
    deployed(): Promise<this>;

    interface: ERC20Interface;

    queryFilter<TEvent extends TypedEvent>(
        event: TypedEventFilter<TEvent>,
        fromBlockOrBlockhash?: string | number | undefined,
        toBlock?: string | number | undefined
    ): Promise<Array<TEvent>>;

    listeners<TEvent extends TypedEvent>(
        eventFilter?: TypedEventFilter<TEvent>
    ): Array<TypedListener<TEvent>>;
    listeners(eventName?: string): Array<Listener>;
    removeAllListeners<TEvent extends TypedEvent>(eventFilter: TypedEventFilter<TEvent>): this;
    removeAllListeners(eventName?: string): this;
    off: OnEvent<this>;
    on: OnEvent<this>;
    once: OnEvent<this>;
    removeListener: OnEvent<this>;

    functions: {
        allowance(
            owner: PromiseOrValue<string>,
            spender: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<[BigNumber]>;

        almond(overrides?: CallOverrides): Promise<[string]>;

        approve(
            spender: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[BigNumber]>;

        campaignNft(overrides?: CallOverrides): Promise<[string]>;

        claimed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;

        decimals(overrides?: CallOverrides): Promise<[number]>;

        decreaseAllowance(
            spender: PromiseOrValue<string>,
            subtractedValue: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        faucet(
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        goodluck(overrides?: CallOverrides): Promise<[string]>;

        increaseAllowance(
            spender: PromiseOrValue<string>,
            addedValue: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        initialize(
            _campaignNft: PromiseOrValue<string>,
            _almond: PromiseOrValue<string>,
            _peanut: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        mintToInsuranceFund(
            _insuranceFund: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        name(overrides?: CallOverrides): Promise<[string]>;

        owner(overrides?: CallOverrides): Promise<[string]>;

        peanut(overrides?: CallOverrides): Promise<[string]>;

        renounceOwnership(
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        setWhitelist(
            _users: PromiseOrValue<string>[],
            _statuses: PromiseOrValue<boolean>[],
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        symbol(overrides?: CallOverrides): Promise<[string]>;

        totalSupply(overrides?: CallOverrides): Promise<[BigNumber]>;

        transfer(
            to: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        transferFrom(
            from: PromiseOrValue<string>,
            to: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<ContractTransaction>;

        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<[boolean]>;
    };

    allowance(
        owner: PromiseOrValue<string>,
        spender: PromiseOrValue<string>,
        overrides?: CallOverrides
    ): Promise<BigNumber>;

    almond(overrides?: CallOverrides): Promise<string>;

    approve(
        spender: PromiseOrValue<string>,
        amount: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

    campaignNft(overrides?: CallOverrides): Promise<string>;

    claimed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    decimals(overrides?: CallOverrides): Promise<number>;

    decreaseAllowance(
        spender: PromiseOrValue<string>,
        subtractedValue: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    faucet(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<ContractTransaction>;

    goodluck(overrides?: CallOverrides): Promise<string>;

    increaseAllowance(
        spender: PromiseOrValue<string>,
        addedValue: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
        _campaignNft: PromiseOrValue<string>,
        _almond: PromiseOrValue<string>,
        _peanut: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    mintToInsuranceFund(
        _insuranceFund: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    name(overrides?: CallOverrides): Promise<string>;

    owner(overrides?: CallOverrides): Promise<string>;

    peanut(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    setWhitelist(
        _users: PromiseOrValue<string>[],
        _statuses: PromiseOrValue<boolean>[],
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    symbol(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(
        to: PromiseOrValue<string>,
        amount: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferFrom(
        from: PromiseOrValue<string>,
        to: PromiseOrValue<string>,
        amount: PromiseOrValue<BigNumberish>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    transferOwnership(
        newOwner: PromiseOrValue<string>,
        overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

    callStatic: {
        allowance(
            owner: PromiseOrValue<string>,
            spender: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        almond(overrides?: CallOverrides): Promise<string>;

        approve(
            spender: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<boolean>;

        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

        campaignNft(overrides?: CallOverrides): Promise<string>;

        claimed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;

        decimals(overrides?: CallOverrides): Promise<number>;

        decreaseAllowance(
            spender: PromiseOrValue<string>,
            subtractedValue: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<boolean>;

        faucet(overrides?: CallOverrides): Promise<void>;

        goodluck(overrides?: CallOverrides): Promise<string>;

        increaseAllowance(
            spender: PromiseOrValue<string>,
            addedValue: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<boolean>;

        initialize(
            _campaignNft: PromiseOrValue<string>,
            _almond: PromiseOrValue<string>,
            _peanut: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<void>;

        mintToInsuranceFund(
            _insuranceFund: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<void>;

        name(overrides?: CallOverrides): Promise<string>;

        owner(overrides?: CallOverrides): Promise<string>;

        peanut(overrides?: CallOverrides): Promise<string>;

        renounceOwnership(overrides?: CallOverrides): Promise<void>;

        setWhitelist(
            _users: PromiseOrValue<string>[],
            _statuses: PromiseOrValue<boolean>[],
            overrides?: CallOverrides
        ): Promise<void>;

        symbol(overrides?: CallOverrides): Promise<string>;

        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

        transfer(
            to: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<boolean>;

        transferFrom(
            from: PromiseOrValue<string>,
            to: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: CallOverrides
        ): Promise<boolean>;

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<void>;

        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<boolean>;
    };

    filters: {
        "Approval(address,address,uint256)"(
            owner?: PromiseOrValue<string> | null,
            spender?: PromiseOrValue<string> | null,
            value?: null
        ): ApprovalEventFilter;
        Approval(
            owner?: PromiseOrValue<string> | null,
            spender?: PromiseOrValue<string> | null,
            value?: null
        ): ApprovalEventFilter;

        "Initialized(uint8)"(version?: null): InitializedEventFilter;
        Initialized(version?: null): InitializedEventFilter;

        "OwnershipTransferred(address,address)"(
            previousOwner?: PromiseOrValue<string> | null,
            newOwner?: PromiseOrValue<string> | null
        ): OwnershipTransferredEventFilter;
        OwnershipTransferred(
            previousOwner?: PromiseOrValue<string> | null,
            newOwner?: PromiseOrValue<string> | null
        ): OwnershipTransferredEventFilter;

        "Transfer(address,address,uint256)"(
            from?: PromiseOrValue<string> | null,
            to?: PromiseOrValue<string> | null,
            value?: null
        ): TransferEventFilter;
        Transfer(
            from?: PromiseOrValue<string> | null,
            to?: PromiseOrValue<string> | null,
            value?: null
        ): TransferEventFilter;
    };

    estimateGas: {
        allowance(
            owner: PromiseOrValue<string>,
            spender: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<BigNumber>;

        almond(overrides?: CallOverrides): Promise<BigNumber>;

        approve(
            spender: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        balanceOf(account: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

        campaignNft(overrides?: CallOverrides): Promise<BigNumber>;

        claimed(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;

        decimals(overrides?: CallOverrides): Promise<BigNumber>;

        decreaseAllowance(
            spender: PromiseOrValue<string>,
            subtractedValue: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        faucet(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<BigNumber>;

        goodluck(overrides?: CallOverrides): Promise<BigNumber>;

        increaseAllowance(
            spender: PromiseOrValue<string>,
            addedValue: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        initialize(
            _campaignNft: PromiseOrValue<string>,
            _almond: PromiseOrValue<string>,
            _peanut: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        mintToInsuranceFund(
            _insuranceFund: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        name(overrides?: CallOverrides): Promise<BigNumber>;

        owner(overrides?: CallOverrides): Promise<BigNumber>;

        peanut(overrides?: CallOverrides): Promise<BigNumber>;

        renounceOwnership(
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        setWhitelist(
            _users: PromiseOrValue<string>[],
            _statuses: PromiseOrValue<boolean>[],
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        symbol(overrides?: CallOverrides): Promise<BigNumber>;

        totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

        transfer(
            to: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        transferFrom(
            from: PromiseOrValue<string>,
            to: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<BigNumber>;

        whitelist(arg0: PromiseOrValue<string>, overrides?: CallOverrides): Promise<BigNumber>;
    };

    populateTransaction: {
        allowance(
            owner: PromiseOrValue<string>,
            spender: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        almond(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        approve(
            spender: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        balanceOf(
            account: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        campaignNft(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        claimed(
            arg0: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;

        decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        decreaseAllowance(
            spender: PromiseOrValue<string>,
            subtractedValue: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        faucet(
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        goodluck(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        increaseAllowance(
            spender: PromiseOrValue<string>,
            addedValue: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        initialize(
            _campaignNft: PromiseOrValue<string>,
            _almond: PromiseOrValue<string>,
            _peanut: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        mintToInsuranceFund(
            _insuranceFund: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        peanut(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        renounceOwnership(
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        setWhitelist(
            _users: PromiseOrValue<string>[],
            _statuses: PromiseOrValue<boolean>[],
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

        transfer(
            to: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        transferFrom(
            from: PromiseOrValue<string>,
            to: PromiseOrValue<string>,
            amount: PromiseOrValue<BigNumberish>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        transferOwnership(
            newOwner: PromiseOrValue<string>,
            overrides?: Overrides & { from?: PromiseOrValue<string> }
        ): Promise<PopulatedTransaction>;

        whitelist(
            arg0: PromiseOrValue<string>,
            overrides?: CallOverrides
        ): Promise<PopulatedTransaction>;
    };
}
