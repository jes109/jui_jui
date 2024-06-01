<Center
                    shadow={2} width="90%"
                    mt="$2" px="$2" py="$4"
                    bg={colorMode} borderRadius={3}
                    alignSelf="center"
                >
                    <HStack alignItems="center">
                        <Text size="lg" px="$2">
                            {colorMode == "light" ? "Light Mode" : "Dark Mode"}
                        </Text>
                        <Switch
                            name="light Mode"
                            value={colorMode === "white"}
                            trackColor={{
                                false: "black",
                                true: "white"
                            }}
                            onToggle={toggleColorMode}
                            accessibilityLabel="display-mode"
                            accessibilityHint="light or dark mode"
                        />
                    </HStack>
                </Center>